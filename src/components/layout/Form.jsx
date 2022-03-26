import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {createShortLink} from "../../features/url/urlSlice"

/**
 * @description 👋🏻 Form
 * @returns {JSX.Element}
 * @constructor
 */
const Form = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onSubmit"})
    const dispatch = useDispatch()
    // This is a way to get the state from the store.
    const {status} = useSelector(({url}) => url)

    // This is a callback function that is called when the form is submitted.
    const onSubmit = ({url}) => {
        dispatch(createShortLink(url))
        reset()
    }

    return <div className="bg-[#1e56b3] bg-[url('/assets/images/bg-boost.svg')] rounded-xl">
        <form
            autoComplete="off"
            className="flex flex-col gap-4 items-start py-6 px-4 sm:flex-row"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col items-start gap-2 w-full sm:flex-grow">
                <input
                    className={`${errors.url && "border-red-500 bg-red-50 text-red-500"} border block w-full px-5 py-2.5 rounded-lg focus:outline-none`}
                    type="url"
                    placeholder="Shorten a link here..."
                    {...register("url", {
                        required: "Please add a link",
                        pattern: {
                            value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
                            message: "Please add a valid link"
                        }
                    })}
                />
                {errors.url && <p className="text-red-500 font-semibold">{errors.url.message}</p>}
            </div>

            <button disabled={status === "loading"} type="submit"
                    className="p-btn-blue w-full sm:w-auto sm:px-7">Short
            </button>
        </form>
    </div>
}

export default Form
