import style from './SubmitButton.module.css'

const SubmitButton = ({ text }) => {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}

export { SubmitButton }