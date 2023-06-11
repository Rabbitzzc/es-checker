declare type ConfigType = {
    dir?: string;
    ignore?: string | string[];
};

declare const ecmaCheck: (filesArgs: string | string[], target: "es6" | "es7" | "es8" | "es9" | "es10" | "es11" | "es12" | "es2015" | "es2016" | "es2017" | "es2018" | "es2019" | "es2020" | "es2021" | "es2022" | "es2023" | undefined, config: ConfigType) => void;

export { ecmaCheck as default };
