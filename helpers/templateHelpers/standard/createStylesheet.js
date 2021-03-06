const fs = require('fs');
function createStylesheet() {
  let output_file;
  let output_path;
  if (process.env.NODE_ENV == 'production') {
    output_path = process.cwd() + '/docs';
    if (!fs.existsSync(output_path)) fs.mkdirSync(output_path);
  } else {
    output_path = process.cwd() + '/test_output/output';
    if (!fs.existsSync(output_path)) fs.mkdirSync(output_path);
  }
  output_file = `${output_path}/style.css`;
  let fd = fs.openSync(output_file, 'w');
  fs.writeFileSync(
    output_file,
    `
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:sans-serif;
    } 
    body {
        background-color:#fafafa;
        color:rgb(22, 22, 29);;
    }
    .nav {
        width:100%;
        padding:1rem;
        background-color:#3880ff;
        color:#fafafa;
    }
    .index {
        margin:2rem;
        padding:1rem;
    }
    .index a {
        font-size:1.2rem;
        margin-left:0.5rem;
        font-weight:bold;
        text-decoration:none;
        color:#9575cd;
    }
    .apis {
        margin-left:3rem;
    }
    .api {
        width:80vw;
        padding:2rem;
        background: #fff;
        border-radius: 5px;
        display: inline-block;
        margin: 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .api .title{
        color:#3880ff;
    }
    .api .method {
        font-size:1.1rem;
        color:#1b5e20 ;
    }
    .api .label {
        font-size:1rem;
        background-color:#673ab7;
        color:#fff;
        font-weight:bold;
        border-radius:5px;
        padding:0.2rem 0.5rem;
    }
    .api .description{
        font-size:1.2rem;
        color:#616161        ;
    }
    table{
        margin-top:0.5rem;
        width:80%;
        border: 1px solid lightgray;
        padding:0.5rem;
        border-radius:15px;
        border-collapse: collapse;
    }
    th,td{
        border:1px solid lightgray;
        padding:0.5rem;
    }
    th{
        text-align:left;
    }
    `
  );
  fs.closeSync(fd);
}

module.exports = createStylesheet;
