import {Router} from 'express';
import pool from '../database.js';

const router = Router();

// Ruta para mostrar el formulario de creación de una nueva persona
router.get('/add', async (req, res) => {
    try {
        const [tiposPersonas] = await pool.query(
            'SELECT * FROM Tipos_Personas',
        );
        res.render('personas/add', {tipos: tiposPersonas});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Insertar los datos en la base de datos de personas, tabla personas
router.post('/add', async (req, res) => {
    try {
        const {name, lastname, age, tipo_persona_id} = req.body;
        const newPersona = {
            name,
            lastname,
            age,
            tipo_persona_id,
        };
        await pool.query('INSERT INTO Personas set ?', [newPersona]);
        res.redirect('/list');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Obtener los datos de las personas y mostrarlos en la vista de list
router.get('/list', async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT p.id, p.name, p.lastname, p.age, tp.tipo AS tipoPersona 
            FROM Personas AS p
            JOIN Tipos_Personas AS tp ON p.tipo_persona_id = tp.id
        `);
        const [tipos] = await pool.query('SELECT * FROM Tipos_Personas');
        res.render('personas/list', {personas: result, tipos: tipos});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Obtener los datos de la persona por el id y mostrarlos en la vista de edit
router.get('/edit/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const [persona] = await pool.query(
            `SELECT p.*, tp.tipo AS tipo_nombre 
             FROM Personas p
             JOIN Tipos_Personas tp ON p.tipo_persona_id = tp.id 
             WHERE p.id = ?`,
            [id],
        );
        // Obtener todos los tipos de personas y listarlos en el select del formulario
        const [tipo_persona] = await pool.query('SELECT * FROM Tipos_Personas');

        if (persona.length === 0) {
            return res.status(404).json({
                message: 'Algo salio mal, la persona no existe. status: 404',
            });
        }
        const personaEdit = persona[0];
        res.render('personas/edit', {
            persona: personaEdit,
            tipos: tipo_persona,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Editar los datos de la persona por el id y los datos del formulario
router.post('/edit/:id', async (req, res) => {
    try {
        const {name, lastname, age, tipo_persona_id} = req.body;
        const {id} = req.params;
        const editPersona = {
            name,
            lastname,
            age,
            tipo_persona_id,
        };
        await pool.query('UPDATE Personas SET ? WHERE id = ?', [
            editPersona,
            id,
        ]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Eliminar los datos de la persona por el id
router.get('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM Personas WHERE id= ?', [id]);
        res.redirect('/list');
    } catch {
        res.status(500).json({message: err.message});
    }
});

export default router;
