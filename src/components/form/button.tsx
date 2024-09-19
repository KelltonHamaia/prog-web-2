type Props = {
    value: string
}

export const Button = ({ value }: Props) => {

    return (
        <button name="" className="w-full bg-rose-700 font-bold text-center text-lg py-2 hover:bg-rose-800 rounded" >{value}</button>
    );

}
