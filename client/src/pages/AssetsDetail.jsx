import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../api'
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import Chart from '../components/Chart'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class AssetsDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asset: {},
            history: [],
            candles: [],
            id: this.props.match.params.id,
        }
    }

    parseData(parse) {
        return function(d) {
            d.date = parse(d.period);
            d.open = +d.open;
            d.high = +d.high;
            d.low = +d.low;
            d.close = +d.close;
            d.volume = +d.volume;
    
            return d;
        };
    }

    componentDidMount = async () => {
        const { id } = this.state
        const asset = await api.getAssetById(id)
        const history = await api.getAssetHistory(id, 'd1')
        const candles = await api.getCandles(id, 'h8', 'ethereum', 'bitcoin')
        
        this.setState({
            asset: asset.data,
            history: history.data,
            candles: candles.data,
        })
    }

    render() {
        let { asset, history, candles } = this.state
        const parse = timeParse("%Q")

        candles = candles.map(d => {
            d.date = parse(d.period);
            d.open = +d.open;
            d.high = +d.high;
            d.low = +d.low;
            d.close = +d.close;
            d.volume = +d.volume;
            d.split = "";
            d.ividend = "";
            d.absoluteChange = "";
            d.percentChange = "";
            delete d.period;

            return d;
        });
        console.log('TCL: Detail -> render -> assets', asset)
        console.log('TCL: Detail -> render -> history', history)
        console.log('TCL: Detail -> render -> candles news', candles)

        let showChart = true
        if (!candles.length) {
            showChart = false
        }

        return (
            <Wrapper>
                {showChart && (
                    <Chart data={candles} />
                )}        
            </Wrapper>
        )
    }
}

export default AssetsDetail
