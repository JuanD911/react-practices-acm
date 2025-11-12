import './Form.css'

export default function Form({ children, onSubmit}) {

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            {children}
        </form>
    );
}