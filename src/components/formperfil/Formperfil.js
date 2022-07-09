import React from 'react';
import "./Formperfil.css";
import Swal from "sweetalert2";
import {Formik, Form, Field, ErrorMessage} from "formik";

let Formperfil=()=>{

    return(
        <>
        <section className="form-modify-profile">
            <h2>Editar datos</h2>

            <Formik

                initialValues={{
                    nombres: '',
                    apellidos:'',
                    tipoDocumento: '',
                    numeroDocumento: '',
                    fechaNacimiento: '',
                    genero:'',
                    correo:'',
                    telefono: '',
                    pais: ''
                }}

                validate={(valores)=>{

                    let errores={}

                    // Validación de errores input nombres
                    if (!valores.nombres) {
                        errores.nombres = 'Por favor ingresar un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombres)){
                        errores.nombres = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validación de errores input apellidos
                    if (!valores.apellidos) {
                        errores.apellidos = 'Por favor ingresar un apellido'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidos)){
                        errores.apellidos = 'El apellido solo puede contener letras y espacios'
                    }

                    // Validación de errores input numeroDocumento
                    if (!valores.numeroDocumento) {
                        errores.numeroDocumento = 'Por favor ingresar el número de documento'
                    } else if (!/^\d{7,10}$/.test(valores.numeroDocumento)){
                        errores.numeroDocumento = 'Solo puede ingresar de 7 a 10 números'
                    }

                    // Validación de errores input genero
                    if (!valores.genero) {
                        errores.genero = 'Por favor ingresar su género'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.genero)){
                        errores.genero = 'El género solo puede contener letras y espacios'
                    }

                    // Validación de errores input correo
                    if (!valores.correo) {
                        errores.correo = 'Por favor ingresar su correo electrónico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Por favor ingresar un correo válido, e.j: usuario@mail.com'
                    }

                    // Validación de errores input telefono
                    if (!valores.telefono) {
                        errores.telefono = 'Por favor ingresar su número telefónico de contacto'
                    } else if (!/^\d{7,14}$/.test(valores.telefono)){
                        errores.telefono = 'El teléfono solo puede contener numeros y mínimo 7 y máximo 14 dígitos'
                    }

                    // Validación de errores input pais
                    if (!valores.pais) {
                        errores.pais = 'Por favor ingresar su país de nacimiento'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pais)){
                        errores.pais = 'El país de nacimiento solo puede contener letras y espacios'
                    }

                    return errores;
                }}

                onSubmit={(valores,{resetForm})=>{
                    
                    resetForm();

                    Swal.fire(
                        'Información actualizada',
                        'Su información de perfil ha sido actualizada correctamente!',
                        'success'
                      )
                }}
            >
                {({errors})=>(
                    <Form>
                    <div className="form-sections">
                            <div className="form-divisions">
                                <label htmlFor="nombres">Nombres</label>
                                <Field
                                type="text"
                                id="nombres"
                                name="nombres"
                                />
                                <ErrorMessage name='nombres' component={()=>(
                                    <div className='mensajeError'>{errors.nombres}</div>
                                )}/>
                            </div>
                            <div className="form-divisions">
                                <label htmlFor="apellidos">Apellidos</label>
                                <Field
                                type="text"
                                id="apellidos"
                                name="apellidos"
                                />
                                <ErrorMessage name='apellidos' component={()=>(
                                    <div className='mensajeError'>{errors.apellidos}</div>
                                )}/>
                            </div>
                        </div>
                        <div className="form-sections">
                            <div className="form-divisions">
                                <label htmlFor="tipoDocumento">Tipo de documento de identidad</label>
                                <Field 
                                as="select"
                                id="tipoDocumento" 
                                name="tipoDocumento" 
                                >
                                    <option value="" defaultValue>Elija su documento</option>
                                    <option value="Registro Civil">Registro Civil</option>
                                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                                </Field>
                            </div>
                            <div className="form-divisions">
                                <label htmlFor="numeroDocumento">Número de documento de identidad</label>
                                <Field
                                type="number"
                                id="numeroDocumento"
                                name="numeroDocumento"
                                />
                                <ErrorMessage name='numeroDocumento' component={()=>(
                                    <div className='mensajeError'>{errors.numeroDocumento}</div>
                                )}/>
                            </div>
                        </div>
                        <div className="form-sections">
                            <div className="form-divisions">
                                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                <Field
                                type="date"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                />
                            </div>
                            <div className="form-divisions">
                                <label htmlFor="genero">Género</label>
                                <Field
                                type="text"
                                id="genero"
                                name="genero"
                                />
                                <ErrorMessage name='genero' component={()=>(
                                    <div className='mensajeError'>{errors.genero}</div>
                                )}/>
                            </div>
                        </div>
                        <div className="form-sections">
                            <div className="form-divisions">
                                <label htmlFor="correo">Correo</label>
                                <Field
                                type="email"
                                id="correo"
                                name="correo"
                                />
                                <ErrorMessage name='correo' component={()=>(
                                    <div className='mensajeError'>{errors.correo}</div>
                                )}/>
                            </div>
                            <div className="form-divisions">
                                <label htmlFor="telefono">Teléfono de contacto</label>
                                <Field
                                type="number"
                                id="telefono"
                                name="telefono"
                                />
                                <ErrorMessage name='telefono' component={()=>(
                                    <div className='mensajeError'>{errors.telefono}</div>
                                )}/>
                            </div>
                        </div>
                        <div className="form-sections">
                            <div className="form-divisions">
                                <label htmlFor="pais">País de origen</label>
                                <Field
                                type="text"
                                id="pais"
                                name="pais"
                                />
                                <ErrorMessage name='pais' component={()=>(
                                    <div className='mensajeError'>{errors.pais}</div>
                                )}/>
                            </div>
                        </div>
                        <div className="form-profile-button">
                            <button type="submit" className="general-button">Guardar cambios</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
        </>
    )
}

export default Formperfil;