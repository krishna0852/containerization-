# Stage 1: Build stage
FROM debian:10 AS build

# Install necessary tools for debugging
RUN apt-get update && apt-get -y install maven procps

# Set the working directory
WORKDIR /opt/shipping

# Copy the POM file to download dependencies
COPY pom.xml /opt/shipping/

# Resolve Maven dependencies
RUN mvn dependency:resolve

# Copy the application source code
COPY src /opt/shipping/src/

# Package the application
RUN mvn package || { echo "Maven build failed"; exit 1; }

# Stage 2: Runtime stage
FROM openjdk:8-jre-alpine

# Set environment variables
EXPOSE 8080
WORKDIR /opt/shipping
ENV CART_ENDPOINT=cart:8080
ENV DB_HOST=mysql

# Copy the JAR file from the build stage
COPY --from=build /opt/shipping/target/shipping-1.0.jar shipping.jar

# Run the application
CMD ["java", "-Xmn256m", "-Xmx768m", "-jar", "shipping.jar"]
