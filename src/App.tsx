import { Form } from "./components/form/form";
import { Rain } from "./components/rain/rain";

const Page = () => {

    return (
        <div className='container max-w-5xl mx-auto border-x border-zinc-700 min-h-screen p-4'>
            <Rain />
            <Form />
        </div>
    );

}

export default Page;