/* eslint-disable jsx-a11y/alt-text */
import MaterialTable from 'material-table'

import { useState } from 'react'

import { ToggleButton } from '@material-ui/lab'
import { Button, ButtonGroup } from '@material-ui/core'
import { Delete, Edit, Visibility } from '@material-ui/icons'

import ModalForm from './modalForm'
import detail from './detail'
import { useModal } from '../../hooks/stateHook'
import { URL, destroy } from '../../utils/formUtils'
import { options, tableIcons } from '../../utils/tableSettings'
import { useHistory } from 'react-router'

const cols = [
    'id',
    'foto',
    'nombre',
    'correo',
    'celular',
    'direccion',
    'estado',
]

const StateButton = ({ id, estado }) => {
    const changeState = async () => {
        let button = document.getElementById(id)
        let span = button.children[0]

        estado = !estado

        await fetch(`${URL}/clientes/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({ estado })
        })

        if (estado) {
            button.style.backgroundColor = 'green'
            button.title = "Dar de Baja"
            span.innerHTML = 'activo'
        } else {
            button.style.backgroundColor = 'red'
            button.title = "Dar de Alta"
            span.innerHTML = 'inactivo'
        }
    }
    return (
        <ToggleButton
            id={id}
            className="badge"
            value={`${estado}`}
            title={estado ? "Dar de Baja" : "Dar de Alta"}
            style={{ backgroundColor: `${estado ? 'green' : 'red'}` }}
            onClick={changeState}
        >
            {`${estado ? 'activo' : 'inactivo'}`}
        </ToggleButton>
    )

}

const showCliente= ({id}) => {
    const history = useHistory();

    history.push(`/clientes/${id}`);
}

const columns = ({ openModal, reloadPage }) => {
    let tmp = cols.map(col => {
        let obj = { title: col, field: col }

        if (col === 'foto') {
            obj.align = 'left'
            obj.searchable = false
            obj.render = ({ foto }) => (
                <img
                    src={foto}
                    height="45" loading="lazy"
                    style={{ borderRadius: '40%' }}
                />
            )
        }

        if (col === 'estado') {
            obj.align = 'center'
            obj.searchable = false
            obj.render = ({ id, estado }) => <StateButton id={id} estado={estado} />
        }

        return obj
    })

    tmp.push({
        title: 'Acción',
        align: 'center',
        render: (row) => (
            <ButtonGroup variant="outlined" size="large">
                <Button
                    title="Ver Detalle"
                    style={{ color: '#1876D2' }}
                    onClick={() => showCliente(row)}
                    children={[<Visibility fontSize="small" />]}
                />
                <Button
                    title="Editar" color="primary"
                    onClick={() => openModal(row)}
                    children={[<Edit fontSize="small" />]}
                />
                <Button
                    title="Eliminar"
                    style={{ color: '#F44336' }}
                    onClick={async () => { await destroy(`${URL}/clientes/${row.id}`, { reloadPage, public_id: row.public_id, }) }}
                    children={[<Delete fontSize="small" />]}
                />
            </ButtonGroup>
        )
    })

    return tmp
}

const DataTable = ({ rows, reloadPage }) => {
    const [model, setModel] = useState({})
    const { open, openModal, closeModal } = useModal()

    const handleModal = row => {
        setModel(row)
        openModal()
    }

    return (
        <>
            <MaterialTable
                title="Clientes"
                style={{ paddingLeft: 10, paddingRight: 10 }}
                columns={columns({ openModal: handleModal, reloadPage })}
                data={rows}
                options={options}
                icons={tableIcons}
            />
            <ModalForm
                open={open}
                model={model}
                closeModal={closeModal}
                reloadPage={reloadPage}
            />
        </>
    );
}

export default DataTable