import mongoose from 'mongoose';
const uri = process.env.DB_URI;


export default () => {
    if (uri) {
        mongoose.connect(uri, (err: any) => {
            if (err) {
                console.log("Database connection failed");
            }
            else {
                console.log("Sucessfully connected to MongoDB");
            }
        }

        );
    } else {
        throw new Error("DB URI not found, please kindly check your connection strings to mongoose");
    }
}

/**
 * Seeding logic for database should go here
 */
function seedDatabase() {

}