import { useTranslation } from "ui/i18n";
import { makeStyles, Text } from "ui/theme";
import { declareComponentKeys } from "i18nifty";

export type Props = {
    className?: string;
};

export default function Page404(props: Props) {
    const { className } = props;

    const { t } = useTranslation({ Page404 });

    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Text typo="display heading">{t("not found")} 😥</Text>
        </div>
    );
}

const useStyles = makeStyles({ "name": { Page404 } })(theme => ({
    "root": {
        "height": "100%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": theme.colors.useCases.surfaces.background
    }
}));

export const { i18n } = declareComponentKeys<"not found">()({ Page404 });
