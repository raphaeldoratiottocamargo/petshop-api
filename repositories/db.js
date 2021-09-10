import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://noyzlrrd:fC9sSuvOFIiQCUd7EKcwZ52hGgES0TpO@chunee.db.elephantsql.com/noyzlrrd"
    });
    global.connection = pool;
    
    return pool.connect();
}

export {
    connect
}