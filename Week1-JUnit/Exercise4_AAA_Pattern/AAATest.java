package junitdemo;

import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AAATest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();
    }

    @AfterEach
    void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    void testAdd() {

        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(5, result);
    }
}
