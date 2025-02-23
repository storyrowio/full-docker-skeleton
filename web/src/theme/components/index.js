import CardTheme from "theme/components/card";
import InputTheme from "theme/components/input";
import ButtonTheme from "theme/components/button";
import TypographyTheme from "theme/components/typography";
import TableTheme from "theme/components/table";

const components = () => {
    return {
        ...ButtonTheme(),
        ...CardTheme(),
        ...InputTheme(),
        ...TableTheme(),
        ...TypographyTheme(),
    }
};

export default components;
