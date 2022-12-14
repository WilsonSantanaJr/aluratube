import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });                
        },
        clearForm() {
            setValues({});
        }
    };
 }

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "http://youtube.." }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);

    console.log();
    /*
        ## O que precisamos para o form funcionar?
        -pegar os dados, que precisam vir do state
            - Titulo
            - url do vídeo
        - precisamos ter um onSubmit do nosso form
        -Limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel 
            ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    console.log(formCadastro.values);

                    // Contrato entre o nosso Front e o BackEnd
                    // supabase.from("video").insert({
                    //     title: formCadastro.values.titulo,
                    //     url: formCadastro.values.url,
                    //     thumb: "",
                    //     playlist: "jogos",
                    // })
                    // .then(() => {
                    //     console.log(oqueveio);
                    // })
                    // .catch(() => {
                    //     console.log(err);
                    // })

                    // setFormVisivel(false);
                    // formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Titulo do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )
            : false}
        </StyledRegisterVideo>
    )
}
// [x] Falta o botão para adicionar
// [x] Modal
// -> Precisamos controlar o state
// -> Formulário em si