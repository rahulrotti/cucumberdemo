package Setpdefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_routematic {
	
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	 public void user_already_on_login_page(){
	 driver = new FirefoxDriver();
	 driver.get("https://nivaataqa1.routematic.com/Security/Home");
	 }
	
	
	 @When("^title of login page is Routematic$")
	 public void title_of_login_page_is_Routematic(){
	 String title = driver.getTitle();
	 System.out.println(title);
	 Assert.assertEquals("Routematic", title);
	 }
	 
	//Reg Exp:
//	 //1. \"([^\"]*)\"
//	 //2. \"(.*)\"

	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password){
	 driver.findElement(By.id("login")).sendKeys(username);
	 driver.findElement(By.id("pass")).sendKeys(password);
	 }
	 
	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
		 driver.findElement(By.id("btn_Login")).click();
	 }
	 
	 @Then("^user is on home page$")
	 public void user_is_on_home_page(){
	 String title = driver.getTitle();
	 System.out.println("Home Page title ::"+ title);
	 Assert.assertEquals("Routematic", title);
	 }
	 
	 @Then("^Close the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }

}
