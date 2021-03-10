import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../api'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class AssetsDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asset: {},
            id: this.props.match.params.id,
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const asset = await api.getAssetById(id)
        this.setState({
            asset: asset.data
        })
    }

    render() {
        const { asset } = this.state
        console.log('TCL: Detail -> render -> assets', asset)

        return (
            <Wrapper>
                 Hola        
            </Wrapper>
        )
    }
}

export default AssetsDetail
