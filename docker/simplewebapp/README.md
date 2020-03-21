#RUN following command from simplewebapp directory to add a tag
docker build -t vamsiveginati/npm:latest .
#RUN following command to start the containter
docker run -p 8080 : 8080 vamsiveginati/npm