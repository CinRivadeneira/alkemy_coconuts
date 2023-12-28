
import React from 'react'
import { useForm } from 'react-hook-form';


const Formulario = () => {
    //Utilizo el hook para gestionar distintos estados del formulario.
    const { register, handleSubmit, formState: { errors }, reset
    } = useForm();

    // Función que se ejecuta al enviar el formulario imprimiendo los datos por consola. Envía una alerta de que el pedido fue exitoso y se resetea para poder realizar un pedido nuevo. 
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        alert(" ✅ TU PEDIDO FUE RECEPCIONADO CON ÉXITO.")
        reset()
    });


    return (
        <>
            <div className="formulario">
                <form className="row g-3"
                    onSubmit={onSubmit}>

                    <div className="form-label">
                        <label htmlFor="nombre"> Nombre </label>
                        <input type="text" className="form-control" id="validationDefault01"
                            //Validaciones que me permite realizar el hook de Formularios
                            {...register("nombre", {
                                // Campo requerido.
                                required: {
                                    value: true,
                                    message: "*Campo requerido*"
                                },
                                // Mínimo de caracteres requeridos.
                                minLength: {
                                    value: 2,
                                    message: "Tu nombre debe ser más extenso"
                                },
                                // Mínimo de caracteres requeridos.
                                maxLength: {
                                    value: 20,
                                    message: "Tu nombre debe ser más corto"
                                }
                            })}

                        />
                        {errors.nombre && <span> {errors.nombre.message} </span>}
                        {/* Muestra un mensaje de error específico para el campo solicitado si hay un error de validación.  */}
                    </div>


                    <div className="form-label">
                        <label htmlFor="apellido" className="form-label"> Apellido </label>
                        <input type="text" className="form-control" id="validationDefault01"
                            {...register("apellido", {
                                required: {
                                    value: true,
                                    message: "*Campo requerido*"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Tu apellido debe ser más extenso"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Tu apellido debe ser más corto"
                                }
                            })}
                        />
                        {errors.apellido && <span> {errors.apellido.message} </span>}
                    </div>


                    <div className="form-label">
                        <label htmlFor="correo" className="form-label"> Correo electrónico </label>
                        <input type="email" className="form-control" id="validationDefault01"
                            {...register("correo", {
                                required: {
                                    value: true,
                                    message: "*Correo válido requerido*"
                                },
                                pattern: { //expresión regular para validación de correo electrónico
                                    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                                    message: "*Correo no válido*"
                                }
                            })}

                        />
                        {errors.correo && <span> {errors.correo.message} </span>}
                    </div>

                    <div className="form-label">
                        <label htmlFor="validationDefault04" className="form-label"> Provincia </label>
                        <select
                            {...register("provincia", {
                                required: true
                            })}
                            className="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Elige una opción...</option>
                            <option value="tuc">Tucumán</option>
                            <option value="sde">Santiago del Estero</option>
                            <option value="cat">Catamarca</option>
                        </select>
                        {errors.provincia && <span> *Campo requerido* </span>}
                    </div>

                    <div className="form-label">
                        <label htmlFor="ciudad" className="form-label"> Ciudad </label>
                        <input type="text" className="form-control" id="validationDefault01"
                            {...register("ciudad", {
                                required: true
                            })}
                        />
                        {errors.ciudad && <span> *Campo requerido* </span>}
                    </div>

                    <div className="form-label">
                        <label htmlFor="codigopostal" className="form-label"> Código Postal </label>
                        <input type="number" className="form-control" id="validationDefault01"
                            {...register("codigopostal", {
                                required: {
                                    value: true,
                                    message: "*Campo requerido*"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Tu código postal debe ser más extenso"
                                },
                                maxLength: {
                                    value: 8,
                                    message: "Tu código postal debe ser más corto"
                                }
                            })}
                        />
                        {errors.codigopostal && <span> {errors.codigopostal.message} </span>}
                    </div>


                    <div className="form-label">
                        <label htmlFor="calle" className="form-label"> Dirección </label>
                        <input type="text" className="form-control" id="validationDefault01"
                            {...register("calle", {
                                required: true
                            })}
                        />
                        {errors.calle && <span> *Campo requerido* </span>}
                    </div>


                    <div className="form-label">
                        <label htmlFor="numero" className="form-label"> Número </label>
                        <input type="number" className="form-control" id="validationDefault01"
                            {...register("numero", {
                                required: {
                                    value: true,
                                    message: "*Campo requerido*"
                                },
                                minLength: {
                                    value: 1,
                                    message: "Tu numero debe ser más extenso"
                                },
                                maxLength: {
                                    value: 4,
                                    message: "Tu número debe ser más corto"
                                }
                            })}
                        />
                        {errors.numero && <span> {errors.numero.message} </span>}
                    </div>

                                
                    <div className="form-label">
                        <label htmlFor="nota" className="form-label">  </label>
                        <input type="text" id="textarea" className="form-control"
                            {...register("nota")}
                            placeholder="Añade una nota adicional a tu pedido..."
                        /> 
                    </div>
                        {/*Único campo que no es requerido*/}

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit"> CONFIRMAR COMPRA </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario;