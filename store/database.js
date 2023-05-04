import * as SQLite from 'expo-sqlite'

const database=SQLite.openDatabase('tasks.db');

export function init()
{
    const promise=new Promise((resolve,reject)=>{



        database.transaction((tx)=>{

            tx.executeSql(`
            CREATE TABLE IF NOT EXISTS tasks(
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                priority INTEGER NOT NULL,
                interval INTEGER NOT NULL,
                time INTEGER NOT NULL,
                compltdinterval INTEGER NOT NULL,
                completed BOOLEAN NOT NULL
            )`,
            [],
            ()=>{
                resolve()
            },
            (_,error)=>{
                reject(error)
            },
            )
        });
    })

    return promise;
}


export function insertTask(task)
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO tasks (title,interval,time,compltdinterval,completed,priority) VALUES (?,?,?,?,?,?)`,
            [task.title,task.interval,task.time,task.compltdinterval,task.completed,task.priority],
            (result)=>{
                console.log(result);
                resolve(result);
            },
            (_,error)=>{
                console.log(error);
                reject(error);
            });
        })
    })

    return promise;

}

export function fetchTasks()
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{


           tx.executeSql(`SELECT * FROM tasks`,
            [],
            (_,result)=>{
                console.log(result.rows._array);
                const tasks=[];

                for(const item of result.rows._array)
                {
                    tasks.push({completed:item.completed,compltdinterval:item.compltdinterval,interval:item.interval,time:item.time,title:item.title,id:item.id,priority:item.priority});
                }
                resolve(tasks);
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    })

    return promise;
}