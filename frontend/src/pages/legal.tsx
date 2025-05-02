import React, { Fragment } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

const Legal = () => {
    const legal = "# Aviso Legal\n\nEn cumplimiento con lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), así como el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD), se informa lo siguiente:\n\n1. Titular del Sitio Web\n- Nombre del titular: Aaron Garces del Garro\n- Nombre comercial: Preciado's Portfolio\n- Sitio web: https://preciado.eu\n- Correo de contacto: contact@preciado.eu\n\n2. Finalidad del Sitio Web\nEl presente sitio web tiene como finalidad servir como blog personal y portfolio profesional. En él, se ofrecen contenidos relacionados con diversos temas de interés, sin recabar ni tratar datos personales de los usuarios de forma directa.\n\n3. Protección de Datos Personales\nEste sitio web no recoge información personal de los usuarios, no utiliza formularios de contacto ni recopila datos mediante cookies. No obstante, es importante informar que, en el caso de que en el futuro se habiliten formularios o se implemente algún sistema de recolección de datos, se cumplirá con la normativa aplicable en materia de protección de datos.\nAdicionalmente, este sitio utiliza anuncios de Google AdSense, los cuales podrían emplear cookies de terceros para la personalización de anuncios y la recopilación de información de los usuarios en relación con sus preferencias de navegación. Google recopila datos como direcciones IP, información sobre el dispositivo y el navegador, y comportamiento de navegación, entre otros. Para obtener más información sobre el uso de cookies y cómo gestionarlas, puedes consultar la política de privacidad de Google en https://policies.google.com/privacy.\n\n4. Uso de Cookies\nEste sitio web no instala cookies propias, pero puede utilizar cookies de terceros para la visualización de anuncios mediante Google AdSense, como mencioné anteriormente. Es importante que, si tu blog empieza a usar cookies o servicios de análisis web (como Google Analytics), informes adecuadamente a los usuarios sobre su uso y les brindes la opción de aceptarlas, siguiendo las normativas de cookies.\n\n5. Propiedad Intelectual\nEl contenido de este sitio web, incluidos los textos, imágenes, logotipos, gráficos y demás elementos, están protegidos por derechos de propiedad intelectual. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin la autorización expresa del titular.\n\n6. Exclusión de Responsabilidad\nEl titular de este sitio web no será responsable de los posibles daños y perjuicios derivados del uso del sitio, ni de los errores u omisiones que pudieran contener los contenidos. Asimismo, no se hace responsable de los contenidos y servicios que puedan ofrecerse a través de enlaces a otros sitios web.\n\n7. Modificación del Aviso Legal\nEl titular del sitio web se reserva el derecho a modificar el presente Aviso Legal en cualquier momento. Cualquier cambio será publicado en esta misma página y se recomienda a los usuarios revisarlo periódicamente.\n\n8. Legislación Aplicable y Jurisdicción\nEste aviso legal se rige por la legislación española. Para la resolución de cualquier conflicto que pueda surgir con relación al uso de este sitio web, las partes se someten a los tribunales de la ciudad de [Ciudad], España.\n\nPara cualquier duda o aclaración, puedes ponerte en contacto con el propietario del sitio a través del correo electrónico: contact@preciado.eu.";
    return(
        <Fragment>
            <div className="flex flex-col items-center mx-[8vw] text-white space-y-8 bg-neutral-950 px-50 pt-8 mb-[2vh] pb-4">
                <Markdown
                    components={{
                        h1: ({ children }) => <h1 className="text-4xl font-semibold">{children}</h1>,
                        p: ({ children }) => <p className="text-md">{children}</p>,
                        a: ({ children, href }) => <a className="text-md text-sky-500 hover:underline" href={href}>{children}</a>,
                        ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
                        li: ({ children }) => <li className="text-md py-2">{children}</li>,
                      }}
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeSanitize]}
                >
                    {legal}

                </Markdown>
            </div>
        </Fragment>
    )
}

export default Legal;