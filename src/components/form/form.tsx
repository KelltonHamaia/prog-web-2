import { FormEvent } from "react";
import { Button } from "./button";
import { Input } from "./input";

export const Form = () => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <h1 className="font-bold text-center text-2xl">Cadastro</h1>
            <form action="" onSubmit={onSubmit}>
                <Input
                    label="Nome:"
                    type="text"
                    placeholder="exemplo..."
                />
                <Input
                    label="Email:"
                    type="email"
                    placeholder="email@teste"
                />
                <Input
                    label="Telefone:"
                    type="tel"
                    placeholder="3333-3333"
                />
                <Button value="Cadastrar" />
            </form>
        </>
    );

}
