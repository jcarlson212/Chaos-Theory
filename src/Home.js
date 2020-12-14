import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Jumbotron, Container } from 'react-bootstrap';
import React from 'react';
import {XYPlot, HeatmapSeries} from 'react-vis';

const particle_container_height = 700;
const particle_count = 50;

class Home extends React.Component {
    state = {
        data_red: [],
        data_blue: [],
        current_max_width: 1000,
    }

    constructor(){
        super()
        let data_red = []
        let i=0;
        for(i =0; i < particle_count; i++){
            data_red.push({
                x: Math.random()*this.state.current_max_width/2,
                y: Math.random()*particle_container_height
            })
        }
        let data_blue = []
        i=0;
        for(i =0; i < particle_count; i++){
            data_blue.push({
                x: Math.random()*this.state.current_max_width/2 + this.state.current_max_width/2,
                y: Math.random()*particle_container_height
            })
        }
        this.state.data_red = data_red
        this.state.data_blue = data_blue
        setInterval(this.modify_particles, 200);
    }

    f = (num) => {
        num = num / (1.0*this.state.current_max_width);
        num = 4.0*num*(1 - num);
        num = num*this.state.current_max_width;
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

    rescale_data = (new_max_width) => {
        let i =0;
        for(i=0; i < this.state.data_red.length; i++){
            this.state.data_red[i]["x"] = (this.state.data_red[i]["x"] / (1.0*this.state.current_max_width))*new_max_width;
        }
        i =0;
        for(i=0; i < this.state.data_blue.length; i++){
            this.state.data_blue[i]["x"] = (this.state.data_blue[i]["x"] / (1.0*this.state.current_max_width))*new_max_width;
        }
    }

    update_particle_container_width = () => {
        const app_div = document.getElementById('App');
        if(app_div != null){
            const width = document.getElementById('App').clientWidth;
            if(!isNaN(width)){
                this.rescale_data(width*(3/4.0) + 1.0);
                this.state.current_max_width = width*(3/4.0) + 1.0;
            }
        }
    }

    render = () => {
        this.update_particle_container_width()
        
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Chaos</h1>
                        <i>
                        This is a website we made for our final project on Chaos Theory
                        </i>
                        <XYPlot height={particle_container_height} width={this.state.current_max_width}>
                            <HeatmapSeries data={this.state.data_red} color="black" />
                            <HeatmapSeries data={this.state.data_blue} color="red" />
                        </XYPlot>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
  }
  
  export default Home;
  