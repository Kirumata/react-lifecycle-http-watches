import { ChangeEvent } from "react";
import "./InputForm.css"

export default function InputForm(props: {
    handleSubmit: (e: React.FormEvent) => void,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}
) {
    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)}>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <label htmlFor="name" >Название</label>
                            </td>
                            <td>
                                <label htmlFor="timezone" >Временная зона</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    id="name" name="name"
                                    type="string"
                                    onChange={(e) => props.handleChange(e)} />

                            </td>
                            <td>
                                <input
                                    id="timezone" name="timezone"
                                    type="number"
                                    onChange={(e) => props.handleChange(e)} />
                            </td>
                            <td><input type="submit" value="Добавить" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}