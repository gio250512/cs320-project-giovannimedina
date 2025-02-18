package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/user")
public class UserNameResource {

    // Create
    @POST
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public Response createUser(@PathParam("name") String name) {
        try {
            if (name == null || name.isEmpty()) {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity("Invalid input: Name cannot be null or empty").build();
            }
            UserName userName = new UserName(name); // Create a new UserName entity from the path parameter
            userName.persist(); // Add the UserName entity to the database
            return Response.ok("Hello " + name + "! Your name has been stored in the database.").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("An error occurred while creating the user").build();
        }
    }

    // Read (version 1) - only returns a list of names
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response getNames() {
        try {
            List<UserName> userNames = UserName.listAll();
            if (userNames.isEmpty()) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity("No names found in the database").build();
            }
            return Response.ok(userNames.toString()).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("An error occurred while retrieving the names").build();
        }
    }

    // Update
    @PATCH
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public Response updateName(@PathParam("id") Long id, String newName) {
        try {
            if (newName == null || newName.isEmpty()) {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity("Invalid input: New name cannot be null or empty").build();
            }
            UserName userName = UserName.findById(id); // Find the UserName entity with the given id
            if (userName == null) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity("User with id " + id + " not found").build();
            }
            String oldName = userName.name; // Get the old name so we can use it in the return statement
            userName.name = newName; // Update the name of the UserName entity
            return Response.ok("\"" + oldName + "\" has been updated to \"" + newName + "\" in the database.").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("An error occurred while updating the name").build();
        }
    }

    // Delete
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public Response deleteName(@PathParam("id") Long id) {
        try {
            UserName userName = UserName.findById(id); // Find the UserName entity with the given id
            if (userName == null) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity("User with id " + id + " not found").build();
            }
            userName.delete(); // Delete the UserName entity from the database
            return Response.ok(userName.name + " has been deleted from the database.").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("An error occurred while deleting the name").build();
        }
    }
}
