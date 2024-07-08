import axios from "axios";


class UserService{
    static BASE_URL = "http://localhost:8080"

    static async login(email, password){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async register(userData) {
      try {
        const response = await axios.post(`${UserService.BASE_URL}/auth/register`, userData);
        return response.data;
      } catch (err) {
        throw err;
      }
    }

    static async getAllUsers(token){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-all-users`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async getYourProfile(token){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-profile`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getUserById(userId, token){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-users/${userId}`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteUser(userId, token){
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/admin/delete/${userId}`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateUser(userId, userData, token){
        try{
            const response = await axios.put(`${UserService.BASE_URL}/adminuser/update/${userId}`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }

    }

    static async createEvent(eventData, token){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/adminuser/create-event`, eventData, {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async getEvents(token){
            try{
                const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-events`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }

       static async deleteEvent(eventId, token) {
         try {
           const response = await axios.delete(`${UserService.BASE_URL}/adminuser/delete-event/${eventId}`, {
             headers: { Authorization: `Bearer ${token}` }
           });
           return response.data;
         } catch (err) {
           throw err;
         }
       }


      static async createNotification(notification, token) {
          try {
            const response = await axios.post(`${UserService.BASE_URL}/admin/create-notifications`, notification, {
              headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
          } catch (err) {
            throw err;
          }
        }


      static async getNotifications(token) {
        try {
          const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-notifications`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      }
      static async deleteNotification(notificationId, token) {
        try {
          const response = await axios.delete(`${UserService.BASE_URL}/admin/delete-notifications/${notificationId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      }

      static async getNews() {
          try {
            const response = await axios.get(`${UserService.BASE_URL}/adminuser/latest-news`);
            return response.data;
          } catch (error) {
            throw error;
          }
        }


      static async createNews(newsData, token) {
        try {
          const response = await axios.post(`${UserService.BASE_URL}/admin/create-news`, newsData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      }

      static async deleteNews(newsId, token) {
        try {
          const response = await axios.delete(`${UserService.BASE_URL}/admin/delete-news/${newsId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      }


    static async getTournaments(token) {
      try {
        const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-tournaments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (err) {
        return { error: 'Failed to retrieve tournaments', message: err.message };
      }
    }

    static async createTournament(tournamentData, token) {
      try {
        const response = await axios.post(`${UserService.BASE_URL}/admin/create-tournament`, tournamentData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    }

    static async deleteTournament(tournamentId, token) {
      try {
        const response = await axios.delete(`${UserService.BASE_URL}/admin/delete-tournament/${tournamentId}`, {
          headers: {
            Authorization: `Bearer ${token}` }
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    }

    static async createSchedule(scheduleData, token) {
        try {
          const response = await axios.post(`${UserService.BASE_URL}/admin/sport-schedules`, scheduleData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      }

      static async deleteSchedule(id, token) {
        try {
          const response = await axios.delete(`${UserService.BASE_URL}/admin/sport-schedules/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      }

      static async getUserRole(token) {
        try {
          const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          });
          return response.data.role;
        } catch (err) {
          throw err;
        }
      }

      static async getIssuingRegisters(token) {
          try {
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-all-item-issuing-registers`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return response.data;
          } catch (err) {
            throw err;
          }
      }

      static async createItemIssuingRegister(issuingRegister, token) {
          try {
            const response = await axios.post(`${UserService.BASE_URL}/admin/create-item-issuing-register`,issuingRegister,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            return response.data;
          } catch (error) {
            throw error;
          }
        }

        static async deleteIssuingRegister(registerId, token) {
          try {
            const response = await axios.delete(`${UserService.BASE_URL}/admin/delete-item-issuing-register/${registerId}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
          } catch (err) {
            throw err;
          }
        }


          static async getItemIssuingRegisterById(registerId, token) {
            try {
              const response = await axios.get(`${UserService.BASE_URL}/admin/get-item-issuing-register/${registerId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              return response.data;
            } catch (err) {
              throw err;
            }
          }

          static async updateItemIssuingRegister(registerId, registerData, token) {
            try {
              const response = await axios.put(`${UserService.BASE_URL}/admin/update-item-issuing-register/${registerId}`, registerData, {
                headers: { Authorization: `Bearer ${token}` },
              });
              return response.data;
            } catch (err) {
              throw err;
            }
          }

          static async getInventories(token) {
              try {
                const response = await axios.get(`${UserService.BASE_URL}/adminuser/inventory`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                return response.data;
              } catch (err) {
                throw err;
              }
            }

          static async createInventory(inventoryData, token) {
            try {
              const response = await axios.post(`${UserService.BASE_URL}/admin/inventory`, inventoryData, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              return response.data;
            } catch (err) {
              throw err;
            }
          }

          static async deleteInventory(inventoryId, token) {
              try {
                const response = await axios.delete(`${UserService.BASE_URL}/admin/inventory/${inventoryId}`, {
                  headers: { Authorization: `Bearer ${token}` },
                });
                return response.data;
              } catch (err) {
                throw err;
              }
            }








    /**AUTHENTICATION CHECKER */
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }

}

export default UserService;