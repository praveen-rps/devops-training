FROM  openjdk
RUN mkdir /project
WORKDIR /project
COPY devopsdemoproject.jar /project
EXPOSE 8081
#CMD ["java", "-jar", "devopsdemoproject.jar"]
ENTRYPOINT ["java", "-jar", "devopsdemoproject.jar"]
