import "./Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
};

export function Button({variant = 'primary', children}: ButtonProps) {
    return(
        <button className={`btn btn-${variant}`}>{children}</button>
    );
}