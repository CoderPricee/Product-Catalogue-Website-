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
 * ------- Utkarsh Srivastava------
 * Hello world!
 *
 */
@SpringBootApplication
public class BackendApplication 

{
//	@Autowired
//	private UserService userService;
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
    public static void main( String[] args )
    {
    	SpringApplication.run(BackendApplication.class, args);
        System.out.println( "Hello World!" );
    }
    
//    public void run(String... args) throws Exception{
//	    User user=new User();
//	    user.setFirstName("Aditya");
//	    user.setLastName("Srivastava");
//	    user.setPassword(this.bCryptPasswordEncoder.encode("1234"));
//	    user.setUserName("aditya");
//	    
//	    Role role1=new Role();
//	    role1.setRoleId(44L);
//	    role1.setRoleName("ADMIN");
//	    
//	    Set<UserRole> userRoleSet=new HashSet<>();
//	    UserRole userRole=new UserRole();
//	    
//	    userRole.setRole(role1);
//	    userRole.setUser(user);
//	    userRoleSet.add(userRole);
//	    
//	    User user1=this.userService.addUser(user, userRoleSet);
//	    System.out.println(user1.getUsername());
//	    
//    }
//    
}