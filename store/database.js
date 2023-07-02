//All the queries are written this file,database used is SQlite

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
                completed BOOLEAN NOT NULL,
                showpopup BOOLEAN NOT NULL,
                breaktime INTEGER NOT NULL
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
            tx.executeSql(`INSERT INTO tasks (title,interval,time,compltdinterval,completed,priority,showpopup,breaktime) VALUES (?,?,?,?,?,?,?,?)`,
            [task.title,task.interval,task.time,task.compltdinterval,task.completed,task.priority,false,task.breaktime],
            (result)=>{
                resolve(result);
            },
            (_,error)=>{
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
                const tasks=[];

                for(const item of result.rows._array)
                {
                    tasks.push({completed:item.completed,compltdinterval:item.compltdinterval,interval:item.interval,time:item.time,title:item.title,id:item.id,priority:item.priority,showpopup:item.showpopup,breaktime:item.breaktime});
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

export function deleteTask(id)
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`DELETE FROM tasks where id=${id}`,
            [],
            (_,result)=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    })

    return promise;
}

export function updateTask(id,value)
{


    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`UPDATE tasks SET time =${value} WHERE id=${id}`,
            [],
            (_,result)=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    })

    return promise;

}

export function getCompleted()
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql('SELECT COUNT(id) FROM tasks WHERE completed=1',
            [],
            (_,result)=>{
                const data=(result.rows._array[0]["COUNT(id)"]);
                resolve(data);
            },
            (_,error)=>{
                reject(error);
            })
        })
    })

    return promise;
}

export function getTotal()
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql('SELECT COUNT(ID) FROM tasks',
            [],
            (_,result)=>{
                const data=(result.rows._array[0]["COUNT(ID)"]);
                resolve(data);
            },
            (_,error)=>{
                reject(error);
            })
        })
    })
    return promise;
}


export function updateCmpCount(id,value)
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`UPDATE tasks SET compltdinterval =${value} WHERE id=${id}`,
            [],
            (_,result)=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    })

    return promise;
}


export function updatePopStatus(id,value)
{
    const val=value===true?1:0;
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`UPDATE tasks SET showpopup =${val} WHERE id=${id}`,
            [],
            (_,result)=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    })

    return promise;
}

export function isCompletedUpdated(id)
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`UPDATE tasks SET completed =1 WHERE id=${id}`,
            [],
            (_,result)=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    })

    return promise;
}