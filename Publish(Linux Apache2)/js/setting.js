particlesJS('particle',{
  "particles":{

      "number":{
        "value":80,
        "density":{
          "enable":true,
          "value_area":700
        }
      },
      "shape":{
        "type":"circle", //circle:edge:triangle:polygon:star:image）
        "stroke":{
          "width":0,
          "color":"#ffcc00"
        },

        "polygon": {
          "nb_sides": 5
        },

        "image": {
          "src": "images/hoge.png",
          "width": 100,
          "height": 100
        }
      },

      "color":{
        "value":"#ffffff"
      },

      "opacity":{
        "value":0.5,
        "random":true,
        "anim":{
          "enable":false,
          "speed":10,
          "opacity_min":0.1,
          "sync":false
        }
      },

      "size":{
        "value":3,
        "random":true,
        "anim":{
          "enable":false,
          "speed":30,
          "size_min":0.1,
          "sync":false
        }
      },

      "line_linked":{
        "enable":true,
        "distance":150,
        "color":"#ffffff",
        "opacity":0.4,
        "width":1
      },

      "move":{
        "speed":5,
        "straight":false,
        "direction":"none",
        "out_mode":"out"
      }
    },

    "interactivity":{
      "detect_on":"canvas",
      "events":{

        "onhover":{
          "enable":false,
          "mode":"repulse" //grab:repulse:bubble
        },

        "onclick":{
          "enable":true,
          "mode":"repulse"
        },
      },

      "modes":{
        "grab":{
          "distance":200,
          "line_linked":{
            "opacity":1
          }
        },

        "repulse":{
          "distance":150
        },

        "bubble":{
          "distance":400,
          "size":40,
          "opacity":8,
          "duration":2,
          "speed":3
        },

        "push":{
          "particles_nb":4
        },

        "remove":{
          "particles_nb":2
        }

      }
    },
    "retina_detect":true,
    "resize":true
  }
);
