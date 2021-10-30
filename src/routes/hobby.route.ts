import { Router } from 'express';
import HobbyController from '../controller/hobby.controller';
import catchAsyncErrors from '../utils/catch-async-errors';
import validator from '../validators';
import userSchema from '../validators/schemas/hobby.schema';
const router = Router();
const hobbyController = new HobbyController();

router.post(
	'/hobby',
    validator(userSchema),
	catchAsyncErrors(hobbyController.createHobby)
);

router.get(
	'/hobby',
	catchAsyncErrors(hobbyController.getAllHobbies)
);

router.get(
	'/hobby/:id',
	catchAsyncErrors(hobbyController.getSingleHobby)
);

router.delete(
	'/hobby/:id',
	catchAsyncErrors(hobbyController.deleteHobby)
);

router.patch(
	'/hobby',
	catchAsyncErrors(hobbyController.editHobby)
);

export { router as hobbyRoutes };
