import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Jumbotron, Container } from 'react-bootstrap';
import React from 'react';
import {XYPlot, LineSeries, MarkSeries, HeatmapSeries} from 'react-vis';

const particle_container_height = 700;
const particle_container_width = 1000;
const particle_count = 50;

class Home extends React.Component {
    state = {
        data_red: [],
        data_blue: []
    }

    constructor(){
        super()
        let data_red = []
        let i=0;
        for(i =0; i < particle_count; i++){
            data_red.push({
                x: Math.random()*particle_container_width/2,
                y: Math.random()*particle_container_height
            })
        }
        let data_blue = []
        i=0;
        for(i =0; i < particle_count; i++){
            data_blue.push({
                x: Math.random()*particle_container_width/2 + particle_container_width/2,
                y: Math.random()*particle_container_height
            })
        }
        this.state.data_red = data_red
        this.state.data_blue = data_blue
        setInterval(this.modify_particles, 200);
    }

    f = (num) => {
        num = num / (1.0*particle_container_width);
        num = 4.0*num*(1 - num);
        num = num*particle_container_width;
        return num;
    }

    g = (num) => {
        num = num / (1.0*particle_container_height);
        num = 4.0*num*(1 - num);
        num = num*particle_container_height;
        return num;
    }

    modify_particles = () => {
        let data_red_new = this.state.data_red;
        let i;
        for(i =0; i < particle_count; i++){
            data_red_new[i] = {
                x: Math.floor(this.f(data_red_new[i].x)),
                y: Math.floor(this.g(data_red_new[i].y))
            };
        }
        let data_blue_new = this.state.data_blue;
        for(i =0; i < particle_count; i++){
            data_blue_new[i] = {
                x: Math.floor(this.f(data_blue_new[i].x)),
                y: Math.floor(this.g(data_blue_new[i].y))
            };
        }
        this.setState({
            ...this.state,
            data_red: data_red_new,
            data_blue: data_blue_new
        })
    }

    render = () => {
        const new_red_data = this.state.data_red;
        const new_blue_data = this.state.data_blue;
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Chaos</h1>
                        <p>
                        This is a website we made for our final project on Chaos Theory
                        </p>
                        <XYPlot height={particle_container_height} width={particle_container_width}>
                            <HeatmapSeries data={new_red_data} color="black" />
                            <HeatmapSeries data={new_blue_data} color="red" />
                        </XYPlot>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
  }
  
  export default Home;
  