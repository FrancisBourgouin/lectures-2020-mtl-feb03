module.exports = (dbClient) => {

    const selectAllDrinks = () => {
        return dbClient.query('SELECT drinks.*, spirit_types.name AS spirit_name, spirit_types.description AS spirit_description FROM drinks JOIN spirit_types ON spirit_types.id = drinks.spirit_type_id')

    }

    const selectOneDrink = (id) => {

    }

    const insertOneDrink = (values) => {


    }

    return {selectAllDrinks}
}