import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload");
    },
    filename: (req, file, cb) => {
        console.log("filename", file);
        cb(null, file.originalname);
    },
})

const upload = multer({ storage: storage });

export default upload;


