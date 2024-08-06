const express = require("express");
const {
    handleGetAllAnimals,
    handleGetAnimalById,
    handleUpdateAnimalById,
    handleDleteAnimalById,
    handleCreateNewAnimal,
    handleGetAlldataDisplayHtml

    } = require("../controllers/animal");

const router = express.Router();

//same routers..
//router.get('/' , handleGetAllAnimals);
//router.post('/' , handleCreateNewAnimal);

router
     .route('/')
     .get(handleGetAllAnimals)
     .post(handleCreateNewAnimal);


// router.get('/:id' , handleGetAnimalById);
// router.patch('/:id' , handleUpdateAnimalById);
// router.delete('/:id' , handleDleteAnimalById);

router
    .route('/:id')
    .get(handleGetAnimalById)
    .patch(handleUpdateAnimalById)
    .delete(handleDleteAnimalById);

router
     .get('/data' , handleGetAlldataDisplayHtml);





module.exports = router;