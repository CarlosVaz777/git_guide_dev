import React from "react"

export default function GitCommand() {
  return (
        <div className="">
            <div>
                <h1 >Comandos de Git</h1>
            </div>
            
            <div className="max-w-none format lg:format-lg format-red">
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git init
                        </li>
                        <li>
                            git clone
                        </li>
                        <li>
                            git branch
                        </li>
                        <li>
                            git checkout main
                        </li>
                        <li>
                            git checkout -b develop
                        </li>
                        <li>
                            git branch -d develop
                        </li>
                        <li>
                            git push origin develop
                        </li>
                    </ul>
            </div>

            <div>
                <h1 className="text-xl text-gray-900 dark:text-white">Crear Rama, Eliminar y Subir &quot; local &quot; </h1>
            </div>
            <div>
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git checkout -b develop
                        </li>
                        <li>
                            git branch -d develop
                        </li>
                        <li>
                            git push origin develop
                        </li>
                    </ul>
            </div>


            <div>
                <h1 className="text-xl text-gray-900 dark:text-white">Subir Cambios</h1>
            </div>
            <div>
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git branch
                        </li>
                        <li>
                            git status
                        </li>
                        <li>
                            git add .
                        </li>

                        <p>Antes de fusionar los cambios, puedes revisar los cambios usando <strong>git deff</strong> presiona la letra para salir &quot; Q &quot;:</p>
                        <li>
                            git deff
                        </li>
                        <li>
                            git add &quot; nombre_archivo &quot;
                        </li>
                        <li>
                            git commit -m &quot; &quot;
                        </li>
                        <li>
                            git push origin develop
                        </li>
                    </ul>
            </div>

                
            <div>
                <h1 className="text-xl text-gray-900 dark:text-white">Ver logs o Commits en el HEAD</h1>
            </div>
            <div>
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git log
                        </li>
                        <li>
                            Presiona la tecla &quot; Q &quot; para salir del &quot; log &quot;
                        </li>
                        <li>
                            git log --oneline
                        </li>
                    </ul>
            </div>


            <div>
                <h1 className="text-xl text-gray-900 dark:text-white">Deshacer un Commit </h1>
            </div>

            <div>
                
                <p>Si todavía no has hecho push de tus cambios tienes dos formas de hacer esto que dependerá de si quieres, o no, mantener los cambios del commit.</p>
                
                    <div className="m-5">
                        <h3> <strong>Si quieres mantener los cambios utiliza el siguiente comando:</strong> </h3>
                    </div>
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git reset --soft HEAD~1
                        </li>
                    </ul>
            </div>

            <div>
                
                <p>Es simplemente el mismo comando pero cambiamos <strong>--soft</strong> por <strong>--hard</strong>. Esto eliminará los cambios de los que habíamos hecho commit anteriormente. ¡⚠️ <strong>Asegúrate que eso es lo que quieres antes de hacerlo!</strong></p>
               
                    <div className="m-5">
                        <h3> <strong>Si NO quieres mantener los cambios utiliza el siguiente comando:</strong> </h3>
                    </div>
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git reset --hard HEAD~1
                        </li>
                    </ul>
            </div>

     
                <h1 className="text-xl text-gray-900 dark:text-white">Arreglar ultimo Commit</h1>
            

 
                <div className="m-5">
                <p> <strong>Si quieres arreglar el último commit (y no has hecho push)</strong> </p>
                </div>
                    <div className="m-5">
                        <h3> Sólo quieres <strong>arreglar el mensaje que has usado para el último commit:</strong> </h3>
                    </div>
                    <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            git commit --amend -m &quot;Este es el mensaje correcto&quot;
                        </li>
                    </ul>
   


            <div>
                <h1 className="text-xl text-gray-900 dark:text-white"> ‼️ Deshacer un commit (ya publicado) </h1>
            </div>
            
            <div>
                    <p> A veces es demasiado tarde y no sólo has hecho commit, si no que además has publicado los cambios. Pero, todavía hay esperanza. Puedes hacer un <strong>revert</strong> de tus cambios indicando el commit que quieres deshacer.</p>
               
                    <div className="m-5">
                        <h3> Sólo quieres <strong>arreglar el mensaje que has usado para el último commit:</strong> </h3>
                    </div>
                        <ul className="m-5 p-2 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li >
                                git revert &quot; número commit&quot;
                            </li>
                        </ul>

                   
                        <p>Esto creará un nuevo commit que deshará todos los cambios de ese commit en concreto. Es una forma interesante de mantener en el historial de Git ese cambio (quién sabe si lo puedes necesitar más adelante).</p>
            
                    
                    
                        <p>Ojooo, para ver el número de commit recuerda que puedes utilizar el comando <strong>git log --oneline</strong></p>
                  
            </div>

        </div>
  )

}