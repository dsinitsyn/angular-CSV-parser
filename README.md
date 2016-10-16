<h1>Angular CSV Parser</h1>

<a target="_blank" href="http://csv-parser.sinitsyn.pro/">http://csv-parser.sinitsyn.pro/</a>

<h2>Description</h2>
Create SPA which show table with data from snapshot. Application should have file upload feature with live reload data on existing table. 

<h3>Requirements:</h3>
<ul>
  <li>Git as version control system + git-flow as model</li>
  <li>Your favorite build system like Gulp or Grunt</li>
  <li>You can use any css framework for styling your application</li>
</ul>

<h3>Description:</h3>
In asset folder you can find two *.csv files: snapshot and deltas.
mandatory: On load your application should build table with data based on snapshot file.
mandatory: Your application should have upload file functions.
bonus: If user upload deltas, application should update rows and columns data in lifetime using timeout specified on file. Example: row ,,,,, shouldn't update data. Row ,,46.04,-0.57,-1.22%, should update 3, 4, 5 column on existing table.

<h2>Installation</h2>
<ol>
  <li><code>npm install</code></li>
  <li><code>gulp</code></li>
</ol>

