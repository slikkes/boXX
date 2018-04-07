package trainin;

import java.util.Scanner;

public class exercise {
	public static void main(String[] args) {
		
		Scanner input= new Scanner(System.in);
		System.out.println("size:");
		int size=input.nextInt();
		
		printBox(size);
		
	}
	
	
	public static void printBox(int size) {
		for (int x=0; x<size; x++) {
			for(int y=0; y<size; y++) {
				
				if(firstOrLast(x,size) || firstOrLast(y,size)) {
					System.out.print("*");
				}else {
					printX(x,y,size-1);
				}
			}
			System.out.println();
		}
	}
	
	
	public static boolean firstOrLast(int step, int size) {
		
		if (step==0 || step==size-1) {
			return true;
		}else {
			return false;
		}		
	}
	
	
	public static void printX(int x, int y , int size) {
	
		if(y==x || y==size-x ) {
			System.out.print("*");
		} else {
			System.out.print(" ");
		}
		
	}
}
