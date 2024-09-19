type Props = {
    label: string,
    placeholder: string,
    type: "text" | "email" | "tel"
}

export const Input = ({ label, placeholder, type }: Props) => {

    const showValue = (e: string) => {
        console.log(e)
    }

    return (
        <>
            <label className="font-semibold" htmlFor={(label.toLowerCase())}>{label}</label>
            <input
                onChange={e => showValue(e.target.value)}
                type={type}
                name={(label.toLowerCase())}
                id={(label.toLowerCase())}
                className="w-full bg-transparent border border-zinc-700 p-2 placeholder:px-2 my-4 rounded outline-none focus-visible:border-rose-700"
                placeholder={placeholder}
            />
        </>
    );

}
