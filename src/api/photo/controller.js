import {
    MongoClient,
    ObjectID
} from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'photo';
const collectiionName = "photo";

const photoControler = {
    get: async (req, res) => {
        try {
            const client = new MongoClient(url, {
                useUnifiedTopology: true
            });
            const connection = await client.connect(); 
            const photo = connection.db(dbName).collection(collectiionName);             
            const result = await photo.find().toArray();           
            res.send(result);
            client.close(); 
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    
    post: async (req, res) => {
        try {
            const client = new MongoClient(url, {
                useUnifiedTopology: true
            });
            const connection = await client.connect();
            const photos = connection.db(dbName).collection(collectiionName);
            if(Array.isArray(req.body))
            {
                const result = await photos.insertMany(req.body);
            }
            else
            {
               const result = await photos.insertOne(req.body);
            }
            res.send("Успішно добавлено!");
            client.close();
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },   
}

export default photoControler;