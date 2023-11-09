import { Router } from "express";
import { usuario } from "./controller.js";

export const router = Router();

router.get('/usuarios', usuario.getAll);
router.post('/usuarios', usuario.add);
router.delete('/usuarios/:id', usuario.delete);
router.put('/usuarios', usuario.update);
