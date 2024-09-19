import { Rainify } from "rainify";

export const Rain = () => {

    return (
        <Rainify
            isRaining
            wind={-4}
            speed={4}
            thickness={0.5}
            intensity={300}
            splashDuration={4}
            color="rgba(255,255,255,0.2)"
            splashColor="rgba(255,255,255,0.2)"
        />
    );

}
