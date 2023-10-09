import { Textarea } from '@chakra-ui/react'
import { useState } from 'react'

export const TextArea = (props) => {
    return (

        <>
            <Textarea
                name="textarea"
                value={props.value}
                onChange={(e) => props.setState({ post: e.target.value, comment: props.state.comment })}
                placeholder="Escreva sua postagem..."
                minH={{base: '15vh', lg: '20vh'}}
                maxH={{base: '15vh', lg: '20vh'}}
                w={{base: '85vw', lg: '35vw'}}
                bgColor={{base: "#EDEDED", lg:"white"}}
                p={3.5}
                mt={{base: '0', lg:'1.5vh'}}
            />
            <button
                className="post-button lg:left-[2.5vw]"
                type="button"
                onClick={() => props.function()}>
                Postar
            </button>
        </>
    )
}

export const ReadOnlyTextArea = () => {
    return (
        <>
            <Textarea
                name="textarea"
                placeholder="Faça login para começar a postar..."
                minH={{base: '15vh', lg: '20vh'}}
                maxH={{base: '15vh', lg: '20vh'}}
                w={{base: '85vw', lg: '35vw'}}
                bgColor={{base: "#EDEDED", lg:"white"}}
                p={3.5}
                mt={{base: '0', lg:'1.5vh'}}
                isReadOnly
                overflowY={'hidden'}
            />
            <button
                className="post-button active:scale-100 lg:left-[2.5vw]"
                type="button"
                isreadonly="true"
            >
                Postar
            </button>
        </>
    )
}


export const CommentTextArea = (props) => {
    return (

        <div className="lg:hidden">
            <Textarea
                name="textarea"
                value={props.value}
                onChange={(e) => props.setState({ post: props.state.post, comment: e.target.value })}
                placeholder="Adicionar comentário..."
                minH={{base: '15vh', md: '20vh'}}
                maxH={{base: '15vh', md: '20vh'}}
                w={{base: '85vw', lg:'35vw'}}
                bgColor={{base: "#EDEDED", md:"white"}}
                p={3.5}
                mt={{base: '0', md:'1.5vh'}}
            />
            <button className="post-button flex items-center justify-center "
                type="button"
                onClick={() => props.function()}>
                Responder
            </button>
        </div>
    )
}


export const DesktopCommentTextArea = (props) => {
    return (

        <>
            <Textarea
                name="textarea"
                value={props.value}
                onChange={(e) => props.setState({ post: props.state.post, comment: e.target.value })}
                placeholder="Adicionar comentário..."
                minH={{base: '15vh', lg: '20vh'}}
                maxH={{base: '15vh', lg: '20vh'}}
                w={{base: '85vw', lg: '35vw'}}
                bgColor={{base: "#EDEDED", lg:"white"}}
                p={3.5}
            />
            <button className="post-button flex items-center relative left-[2vw] justify-center "
                type="button"
                onClick={() => props.function()}>
                Responder
            </button>
        </>
    )
}

export const EditTextArea = (props) => {
    return (
        <>
            <Textarea
                name="textarea"
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                placeholder={`Edite seu ${props.type}...`}
                minH={{base: '15vh', lg: '20vh'}}
                maxH={{base: '15vh', lg: '20vh'}}
                w={{base: '85vw', lg: '35vw'}}
                bgColor={{base: "#EDEDED", lg:"white"}}
                p={3.5}
                mt={{base: '0', lg:'1.5vh'}}
            />
            <button className="edit-button"
                type="button"
                onClick={() => props.function()}
            >
                Enviar
            </button>
        </>
    )
}

export const FeedbackTextArea = (props) => {

    const [confirmMail, setConfirmMail] = useState("")
    const [flow, setFlow] = useState(0)

    const changeButton = () => {
        if (confirmMail === props.email) {
            setFlow(1)
        }
    }

    return (
        <>
            <Textarea
                name="textarea"
                placeholder="Descreva melhor seu motivo se desejar..."
                minH={{base: '15vh', lg: '20vh'}}
                maxH={{base: '15vh', lg: '20vh'}}
                w={{base: '85vw', lg: '30vw'}}
                bgColor={{base: "#EDEDED", lg:"white"}}
                p={3.5}
                mt={{base: '2vh'}}
            />

            {flow === 0 ?
            
            <div className="flex flex-col mt-[2vh] md:mt-[1vh] gap-[2vh] md:gap-[1vh] text-center">
            <p className="text-[15px] mt-[1vh] md:mt-[1vh] lg:pb-[2vh] font-bold">Confirme seu e-mail para continuar</p>
                <input
                    className="input"
                    placeholder="Confirme seu e-mail"
                    value={confirmMail}
                    onChange={(e) => setConfirmMail(e.target.value)}
                />

                <button className="post-button relative lg:top-[0] lg:w-[20vw] bottom-[2vh] flex items-center justify-center"
                    type="button"
                    onClick={() => changeButton()}>
                    Confirmar
                </button>
                </div>
                :
                <button className="post-button relative lg:top-[0] lg:w-[20vw] bottom-[2vh] flex items-center justify-center"
                    type="button"
                    onClick={() => props.function()}>
                    Deletar conta
                </button>
            }
        </>
    )
}