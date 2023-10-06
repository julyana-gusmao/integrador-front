import { Textarea } from '@chakra-ui/react'

export const TextArea = (props) => {
    return (

        <>
            <Textarea
                name="textarea"
                value={props.value}
                onChange={(e) => props.setState({ post: e.target.value, comment: props.state.comment })}
                placeholder="Escreva sua postagem..."
                minH={'15vh'}
                maxH={'15vh'}
                w={'85vw'}
                bgColor={"#EDEDED"}
                p={3.5}
            />
            <button
                className="post-button"
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
                minH={'5vh'}
                maxH={'5vh'}
                w={'85vw'}
                p={2.5}
                bgColor={"#EDEDED"}
                isReadOnly
                overflowY={'hidden'}
            />
            <button
                className="post-button active:scale-100"
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

        <>
            <Textarea
                name="textarea"
                value={props.value}
                onChange={(e) => props.setState({ post: props.state.post, comment: e.target.value })}
                placeholder="Adicionar comentário..."
                minH={'15vh'}
                bgColor={"#EDEDED"}
                maxH={'15vh'}
                w={'85vw'}
                mt={'2vh'}
                p={3.5}
            />
            <button className="post-button flex items-center justify-center"
                type="button"
                onClick={() => props.function()}>
                Responder
            </button>
        </>
    )
}