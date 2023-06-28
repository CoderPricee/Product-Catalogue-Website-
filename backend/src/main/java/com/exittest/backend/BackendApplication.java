package com.exittest.backend;


//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//import com.exittest.backend.model.Role;
//import com.exittest.backend.model.User;
//import com.exittest.backend.model.UserRole;
//import com.exittest.backend.service.UserService;

/**
 * 
 * Hello world!
 *
 */
@SpringBootApplication
public class BackendApplication 

{

    public static void main( String[] args )
    {
    	SpringApplication.run(BackendApplication.class, args);
        System.out.println( "Hello World!" );
    }
    

}