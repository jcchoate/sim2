module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { property_name, address, city, state, zip, image_url, mortage, rent } = req.body

        dbInstance.create_home([property_name, address, city, state, zip, image_url, mortage, rent])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot create this, my lord.' })
            })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params } = req
        
        dbInstance.read_home(params.id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot retrieve that, my lord.' })
            })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_homes()
            .then(products => res.status(200).send(products))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot retrieve those, my lord.' })
            })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req
        dbInstance.update_home([params.product_name, query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot update this, my lord.' })
            })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params } = req
        dbInstance.delete_home([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot delete this, my lord.' })
            })
    },
}