import {useDispatch, useSelector} from "react-redux"
import {AnimatePresence, motion} from "framer-motion"
import {useState} from "react"
import {resetState} from "../../features/url/urlSlice"

/**
 * @description 👋🏻 FormResult
 * @returns {JSX.Element|null}
 * @constructor
 */
const FormResult = () => {
    const dispatch = useDispatch()
    // It's a way to get the state from the store.
    const {items} = useSelector(({url}) => url)
    const [copyValue, setCopyValue] = useState(null)

    const copyToClipboard = (link) => navigator.clipboard.writeText(link).then(() => setCopyValue(link))

    // This is a way to check if an array is empty.
    if (!items?.length) return null

    return <ul className="grid gap-5">
        <li>
            <button
                onClick={()=> dispatch(resetState())}
                className="p-btn-clean"
            >Clear all</button>
        </li>
        {items.map(link =>
            <AnimatePresence key={link.code}>
                <motion.li
                    className="flex flex-col items-center bg-white gap-[10px] p-4 rounded-xl text-sm sm:flex-row"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                >
                    <span className="flex-grow break-all">{link.original_link}</span>
                    <span className="p-link font-semibold">{link.full_short_link2}</span>
                    <button
                        className={`${copyValue === link.full_short_link2 && "bg-blue-200"} px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm`}
                        onClick={() => copyToClipboard(link.full_short_link2)}
                    >
                        {copyValue === link.full_short_link2 ? "Copied" : "Copy"}
                    </button>
                </motion.li>
            </AnimatePresence>
        )}
    </ul>
}

export default FormResult
