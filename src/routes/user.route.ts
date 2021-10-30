import { Router } from 'express';
import UserController from '../controller/user.controller';
import catchAsyncErrors from '../utils/catch-async-errors';
import validator from '../validators';
import userSchema from '../validators/schemas/user.schema';
const router = Router();
const userController = new UserController();

router.post(
	'/user',
    validator(userSchema),
	catchAsyncErrors(userController.createUser)
);

router.get(
	'/user',
	catchAsyncErrors(userController.getAllUsers)
);

router.get(
	'/user/:id',
	catchAsyncErrors(userController.getSingleUser)
);

router.delete(
	'/user/:id',
	catchAsyncErrors(userController.deleteUser)
);

router.patch(
	'/user',
	catchAsyncErrors(userController.editUser)
);

router.patch(
	'/user/hobby',
	catchAsyncErrors(userController.editUserHobby)
);

export { router as userRoutes };
